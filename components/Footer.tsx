const Main = () => {
  return (
    <footer className="h-screen px-32 py-24 flex flex-row gap-8 bg-dark text-light font-medium">
      <div>
        <h1>Nous contacter</h1>
        <div className="m-auto flex flex-col gap-2">
          <p>Mail : hello@bolide.mg</p>
          <p>Telephone : +261 32 00 000 80</p>
          <p>
            Adresse : LOT IVE 92 Behoririka, Antananarivo 101, Madagascar BP3779
          </p>
          <div>
            <p>Du Lundi au Vendredi de 8h00 / 12h00 à 14h00 / 18h00</p>
            <p>Le Samedi de 9h à 12h</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Prennez rendez-vous</h1>
      </div>
    </footer>
  );
};

export default Main;
