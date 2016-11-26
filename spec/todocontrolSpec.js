describe('todocontrol', function () {
    var container, application;

    beforeEach(function () {
        container = fixture(


          '<input id ="todoinput" type="text" name="firstname">' +
          '<button id = "click1" type="button"> click</button>' +
          '<div id="checkboxes">  </div>' +
          '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>'
        );
        document.body.appendChild(container);
         application = new Application(document);

    });

    afterEach(function () {
        document.body.removeChild(container);
    });

    it('should print todolist when button is pressed', function () {
      application.init()

        document.getElementById('todoinput').value="Finish job";
        document.getElementById('click1').click();


        expect(document.getElementById('checkboxes').innerHTML).toEqual('<div id="0"> <input type="checkbox" id="checkboxid0" class="checkbox1"> Finish job<br></div>');
    });

});

function fixture(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div;
}
