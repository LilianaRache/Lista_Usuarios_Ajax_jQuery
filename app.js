 $(document).ready(function(){


  $("form").on("submit", function(e){
      e.preventDefault()
      $nombre = $("#nombre")
      $apellido = $("#apellido")
      $edad = $("#edad")

      if ($nombre.val()=== ""|| $apellido.val()=== "" || $edad.val()=== "") {
        alert("Caracoles @! , llena todos tus datos...")
      }
      else {
        $("tbody").append(`<tr>
          <td>${$nombre.val()}</td>
          <td>${$apellido.val()}</td>
          <td>${$edad.val()}</td>
        </tr>`)
      }
        $nombre.val("");
        $apellido.val("");
        $edad.val("")
    })

  //AQUI EMPIEZA AJAX


  banderas=[
    { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
    { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
    { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
    { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
    ]

    $.ajax({"url": "https://s3.amazonaws.com/makeitreal/countries.json",
    "method": "get", "success": function(arrbandera){
      arrbandera.forEach(function(value){
        $('#tabla').append (`<tr>
          <td>${value.code}</td>
          <td>${value.name}</td>
          <td><img src="${value.flag_url}" alt="foto"></td>
        </tr>`)
      })
    }
      })



})
