import React from 'react'

const ProgramarHorarios = () => {
    return (
        <div>
             <head>
                 <script type="text/javascript">
                     function insertText() {
                         document.getElementById('td1').innerHTML ="some text to enter"
                     };
                 </script>
             </head>

             <h1 className="text-dark text-center">Horario</h1>
            <table className="table table-bordered table-hover">
             <thead className="table-primary">
                 <tr>
                     <th>Hr</th>
                     <th>Lunes</th>
                     <th>Martes</th>
                     <th>Miercoles</th>
                     <th>Jueves</th>
                     <th>Viernes</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>7:45 - 10:00</td>
                     <td id="td1"></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                 </tr>
                 <tr>
                     <td>10:00-12:15</td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                 </tr>
             </tbody>
            </table>
            
        </div>
    )
}

export default ProgramarHorarios
