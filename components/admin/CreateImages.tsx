import {CreateBase, SimpleForm, NumberInput, ImageInput, ImageField} from "react-admin";

const Main = () => (
  <CreateBase>
    <SimpleForm>
      <NumberInput source="carId" min={0} name="carId"/>
      <ImageInput source="file" name="file" multiple>
        <ImageField />
      </ImageInput>
    </ SimpleForm>
  </CreateBase>
)

export default Main;