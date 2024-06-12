import {
  CreateParams,
  DataProvider,
  DeleteManyParams,
  DeleteParams,
  fetchUtils,
  GetListParams,
  GetManyParams,
  GetManyReferenceParams,
  GetOneParams,
  UpdateManyParams,
  UpdateParams,
} from "react-admin";
import stringify from "query-string";

const apiUrl = "http://localhost:8080";
const httpClient = fetchUtils.fetchJson;

const createPostFormData = (params: CreateParams<any>) => {
  const formData = new FormData();
  params.data.carId && formData.append("carId", params.data.carId);
  params.data.file[0]?.rawFile && formData.append("file", params.data.file[0].rawFile);

  return formData;
}

const jsonProvider: DataProvider = {
  // Done
  getList: async (resource: string, params: GetListParams) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify.stringify(query)}`;

    const result = await httpClient(url);

    return {
      data: result.json,
      total: Array(result.json).length + 1,
    };
  },
  async create(
    resource: string,
    params: CreateParams,
  ) {
    console.log(params)
    switch (resource) {
      case "images": {
        const result = await httpClient(`${apiUrl}/images/car/${params.data.carId}/save`, {
          method: 'POST',
          body: createPostFormData(params)
        });
        return {
          data: result.json
        }
      }
      default: {
        return {
          data: null
        }
      }
    }
  },

  //Not done
  getOne: (resource: string, params: GetOneParams) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),

  getMany: (resource: string, params: GetManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify.stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource: string, params: GetManyReferenceParams) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify.stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(
        headers.get("content-range")?.split("/").pop() || "0",
        10,
      ),
    }));
  },

  update: (resource: string, params: UpdateParams) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  updateMany: (resource: string, params: UpdateManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify.stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  delete: (resource: string, params: DeleteParams) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource: string, params: DeleteManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify.stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params),
    }).then(({ json }) => ({ data: json }));
  },
};

export default jsonProvider;
