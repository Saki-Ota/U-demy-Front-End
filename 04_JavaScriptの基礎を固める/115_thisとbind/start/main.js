const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this);
        const _that = this;


// there are 2 ways to refer obj instead of window object.
        window.setTimeout(function () {
            console.log(this);
        }.bind(this));

        window.setTimeout(
          function () {
            console.log(this);
          }.bind(_that)
        );

// bind() can take any object
        window.setTimeout(
          function () {
            console.log(this);
          }.bind({first_name: 'Saki'})
        );
    }
}

obj.printFullName();

