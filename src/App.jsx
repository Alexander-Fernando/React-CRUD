// import Contador from './components/Contador';
// import Cupcake from './components/Cupcake';
// import Estados from './components/Estados';
// import Eventos from './components/Eventos';
// import Parrafo  from './components/Parrafo'
// import Listas from "./components/Listas";
// import Formulario from "./components/Formulario";

// import Crud from "./components/Crud";
import {useState} from 'react';
import shortid from 'shortid';

function App() {

  const [tareas,setTareas] = useState([]);
  const [tarea, setTarea] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState(null);
 
  const agregarTarea = (e) => {
    e.preventDefault();
    if(!tarea.toString().trim()){
      setError('Digite la tarea...');
      return;
    }
      setTareas([...tareas, {
        id: shortid.generate(), tarea
      }]);
      setTarea("");
      setError(null);
    
  }

  const eliminarTarea = (id) => {
    const newTareas = tareas.filter(tarea => tarea.id !== id);
    setTareas(newTareas);
  }

  const editar = (elem) => {
    setEdit(true);
    setTarea(elem.tarea);
    setId(elem.id);
  }

  const editarTarea = e => {
    e.preventDefault();
    if(!tarea.toString().trim()){
      setError('Digite la tarea editada...');
      return;
    }
      const newArray = tareas.map(item => item.id === id ? {id, tarea} : item );
      setTareas(newArray);
      setEdit(false);
      setTarea('');
      setId('');
      setError('');
  }


  return (
    <div className="container mt-5">
      <h1 className="text-center text-danger">Crud Simple React</h1>
      <hr />

      <div className="row">
        <div className="col-8">

            <h4 className="text-center">Lista de Tareas</h4>
            <ul className="list-group">

              {
                tareas.length === 0 ? 
                (
                  <li className="list-group-item text-danger">No hay tareas</li>
                ) : 
                
                (tareas.map((elem) => (
                  <li key={elem.id} className="list-group-item ">
                  <span className="lead float-start">{elem.tarea}</span>
                  <button 
                    onClick= { () => editar(elem)}
                    className="btn btn-warning btn-sm mx-2 float-end">
                    Editar
                    
                  </button>

                  <button 
                    className="btn btn-danger btn-sm float-end"
                    onClick={() => eliminarTarea(elem.id)}
                  >
                    Eliminar
                  </button>

                </li>
                )))
              }
            </ul>  

        </div>
        <div className="col-4">
          <h4 className="text-center">
              {
                edit ? 'Editar tarea' : 'Agregar tarea'
              }
          </h4>

              
              
          <form onSubmit={ edit ? editarTarea : agregarTarea }>

            {error ? (<li className="li-group-item text-danger"> {error}</li>) : null }
            <input 
              onChange = {(e) => setTarea(e.target.value)}
              type="text" 
              className="form-control mb-2" 
              placeholder="Ingrese tarea..."
              value={tarea}
            />
            

            {
              edit ? (
                <button className="btn btn-warning col-12" type="submit">
                Editar
                </button>
              ) : (
              <button className="btn btn-dark col-12" type="submit">
              Agregar
              </button>
              ) 
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
