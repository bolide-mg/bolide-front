import Image from "next/image";

const Main = () => {
    return (
        <div className="w-full h-64 bg-grey hover:bg-light transition flex border-b">
            <div className="w-3/12 bg-grey overflow-hidden">
                <Image src="https://th.bing.com/th/id/R.a701b4055fcaa63eba58a5a2205dcba8?rik=XzKpQj1V5SJJCA&riu=http%3a%2f%2fwww.itcjewelry.com%2fimg%2fillustration-1.png&ehk=9YYEaRBknefzGSHvi6JX1YfHQVgb%2fYC1OdUk0UucjKE%3d&risl=&pid=ImgRaw&r=0"
                       height={300}
                       width={300}
                       alt="image"
                />
            </div>
            <div className="w-3/4 bg-light">
                <p>description</p>
                {/*TODO: more description here*/}
                <a href="/car/1">detail</a>
            </div>
        </div>
    )
}

export default Main;