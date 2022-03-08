
   const maleAkan = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "yaw",
        "kofi",
        "kwame"
      ];
      const femaleAkan =[
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
      ];
      
      const btn = document.getElementById("btn");
      
      
      
      btn.addEventListener("click", function (e) {
        e.preventDefault();
          const date = document.getElementById("date");
          const gender = document.querySelector("input[type= 'radio']:checked");
          const result = document.getElementById("result");

          console.log(date);
          let Akan = date.value;
          let birthday = new Date(Akan);
          let Day =  birthday.getDay();

          if (gender.value  === "male"){
              result.innerHTML = "your name is " + maleAkan[Day];
          }
          if(gender.value === "female"){
            result.innerHTML = femaleAkan[Day];
          }
          
          
          
          
          
        });