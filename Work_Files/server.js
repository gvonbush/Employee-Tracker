var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'yourRootPassword',
  database : 'employee_tracker_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

 
connection.end();

var questions = [
    {
        type: 'list',
        name: 'initial_action',
        message: 'What would you like to do?',
        choices: ['Add Department', 'Add Role', 'Add Employee', 'View Department', 'View Role', 'View Employee', 'Update Employee Role'],
        filter: function(val) {
          return val.toLowerCase();
        }
    }
    ];

    // { 
    //   type: 'input', 
    //   name: 'department_id', 
    //   message: "Which department?" 
    // },
    // {
    //   type: 'input', 
    //   name: 'last_name', 
    //   message: "What's your last name", 
    //   default: function() { 
    //     return 'Doe'; 
    //   }
    // },
    // { 
    //   type: 'input', 
    //   name: 'fav_color', 
    //   message: "What's your favorite color", 
    //   transformer: function(color, answers, flags) {
    //     const text = chalkPipe(color)(color); 
    //     if (flags.isFinal) { 
    //       return text + '!'; 
    //     }
  
    //     return text;
    //   }
    // },
    // {
    //   type: 'input',
    //   name: 'phone',
    //   message: "What's your phone number",
    //   validate: function(value) {
    //     var pass = value.match(
    //       /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
    //     );
    //     if (pass) {
    //       return true;
    //     }
  
    //     return 'Please enter a valid phone number';
    //   }
    // }

  
  inquirer.prompt(questions).then(answers => {
      
    
        action_decider(answers)
  });

  function action_decider(answers){
      
    switch(answers.initial_action){
    case "add department":
        console.log(JSON.stringify(answers, null, '  '));
        break;
    
    case "add role":
        console.log(JSON.stringify(answers, null, '  '));
        break;
    
    case "add employee":
        console.log("testing");
        break;}
  }