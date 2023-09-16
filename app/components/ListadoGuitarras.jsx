import Guitarra from './Guitarra'

export default function ListadoGuitarras({guitarras}) {
  return (
    <>
      <h2 className="heading">Nuestra coleccion</h2>
      {Object.keys(guitarras)?.length > 0 && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      )}
    </>
  );
}
