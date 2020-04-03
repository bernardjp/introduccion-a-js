const $datosUsuario = document.querySelector('#ingresar-datos');

$datosUsuario.onclick = function(){
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);

    document.querySelector('h1').textContent = `Bienvenido, ${nombreUsuario}!` 
    document.querySelector('#informacion-completa').value = `${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}. ${edadUsuario}.`
}
