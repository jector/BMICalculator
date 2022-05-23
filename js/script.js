$("form").on("submit", placeImage);

function placeImage(event) {
    event.preventDefault();
    // create an image <img>
    let newImage = $("<img class='person' src='../pictures/person-icon.png'>")
    // get the weight
    let weight = Number( $("#weight").val() );
    // get the height
    let height = Number( $("#height").val() );

    let pixelsPerInch = -385 / 23;
    let pixelsPerPound = 735 / 195;

    let top = (height - 79) * pixelsPerInch + 12;
    let left = (weight - 80) * pixelsPerPound + 23;

    let bmiForm = (weight * 703 / height**2).toFixed(1) ;

    newImage.css("top",top);
    newImage.css("left",left);

    $("#chart").html(newImage);
    $("#bmiResult").text(bmiForm);

    if(bmiForm < 16.0){
        $("#categoryBmi").text("Underweight (Severe thinness)");
        $(".contentResult").removeClass("bg-light bg-opacity-50 bg-opacity-75 bg-info bg-success bg-warning bg-danger").addClass("bg-primary text-light");
    }else if(bmiForm >= 16.0 && bmiForm < 17.0){
        $("#categoryBmi").text("Underweight (Moderate thinness)");
        $(".contentResult").removeClass("bg-light bg-opacity-75 bg-info bg-success bg-warning bg-danger").addClass("bg-primary bg-opacity-50");
    }else if(bmiForm >= 17.0 && bmiForm < 18.5){
        $("#categoryBmi").text("Underweight (Mild thinness)");
        $(".contentResult").removeClass("bg-light bg-opacity-50 bg-primary bg-success bg-warning bg-danger text-light").addClass("bg-info bg-opacity-75");
    }else if(bmiForm >= 18.5 && bmiForm < 25.0){
        $("#categoryBmi").text("Normal range");
        $(".contentResult").removeClass("bg-light bg-opacity-50 bg-primary bg-info bg-warning bg-danger").addClass("bg-success bg-opacity-75 text-light");
    }else if(bmiForm >= 25.0 && bmiForm < 30.0){
        $("#categoryBmi").text("Overweight (Pre-obese)");
        $(".contentResult").removeClass("bg-light bg-opacity-50 bg-primary bg-success bg-info bg-danger text-light").addClass("bg-warning bg-opacity-75");
    }else if(bmiForm >= 30.0 && bmiForm < 35.0){
        $("#categoryBmi").text("Obese (Class I)");
        $(".contentResult").removeClass("bg-light bg-opacity-50 bg-opacity-75 bg-primary bg-success bg-info bg-danger text-light").addClass("bg-warning ");
    }else if(bmiForm >= 35.0 && bmiForm < 40.0){
        $("#categoryBmi").text("Obese (Class II)");
        $(".contentResult").removeClass("bg-light bg-opacity-50 bg-primary bg-success bg-info bg-warning").addClass("bg-danger bg-opacity-75 text-light");
    }else if(bmiForm >= 40.0){
        $("#categoryBmi").text("Obese (Class III)");
        $(".contentResult").removeClass("bg-light bg-opacity-50 bg-opacity-75 bg-primary bg-success bg-info bg-warning").addClass("bg-danger text-light");
    }
}