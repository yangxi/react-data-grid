var QuickStartDescription = require('../components/QuickStartDescription')
var ReactPlayground       = require('../assets/js/ReactPlayground');
var faker = require('faker');

var AllFeaturesExample = `
  var Editors             = ReactDataGrid.Editors;
  var Toolbar             = ReactDataGrid.ToolsPanel.AdvancedToolbar;

  faker.locale = 'en_GB';

  function createFakeRowObjectData(/*number*/ index) {
    return {
      id: 'id_' + index,
      avartar: faker.image.avatar(),
      county: faker.address.county(),
      email: faker.internet.email(),
      title: faker.name.prefix(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      street: faker.address.streetName(),
      zipCode: faker.address.zipCode(),
      date: faker.date.past().toLocaleDateString(),
      bs: faker.company.bs(),
      catchPhrase: faker.company.catchPhrase(),
      companyName: faker.company.companyName(),
      words: faker.lorem.words(),
      sentence: faker.lorem.sentence()
    };
  }

  function createRows(numberOfRows) {
    var rows = [];
    for (var i = 0; i < numberOfRows; i++) {
      rows[i] = createFakeRowObjectData(i);
    }
    return rows;
  }

  
  var columns = [
    {
      key: 'id',
      name: 'ID',
      width : 80,
      resizable: true
    },
    {
      key: 'avartar',
      name: 'Avartar',
      width : 60,
      formatter : ReactDataGrid.Formatters.ImageFormatter,
      draggable : true
    },
    {
      key: 'county',
      name: 'County',
      width : 200,
      draggable: true
    },
    {
      key: 'title',
      name: 'Title',
      width : 200,
      draggable: true
    },
    {
      key: 'firstName',
      name: 'First Name',
      width : 200,
      draggable: true
    },
    {
      key: 'lastName',
      name: 'Last Name',
      width : 200,
      draggable: true
    },
    {
      key: 'email',
      name: 'Email',
      width : 200,
      draggable: true
    },
    {
      key: 'street',
      name: 'Street',
      width : 200,
      draggable: true
    },
    {
      key: 'zipCode',
      name: 'ZipCode',
      width : 200,
      draggable: true
    },
    {
      key: 'date',
      name: 'Date',
      width : 200,
      draggable: true
    },
    {
      key: 'bs',
      name: 'bs',
      draggable:true,
      width : 200
    },
    {
      key: 'catchPhrase',
      name: 'Catch Phrase',
      width : 200,
      draggable: true
    },
    {
      key: 'companyName',
      name: 'Company Name',
      width : 200,
      draggable: true
    },
    {
      key: 'sentence',
      name: 'Sentence',
      width : 200,
      draggable: true
    }
  ];


 var Example = React.createClass({displayName: 'component',

    getInitialState : function(){
      var fakeRows = createRows(2000);
      return {rows :fakeRows};
    },

    getRowAt : function(index){
      if (index < 0 || index > this.getSize()){
        return undefined;
      }
      return this.state.rows[index];
    },

    getSize : function() {
      return this.state.rows.length;
    },

    render : function() {
      return (
            <ReactDataGrid
              ref='grid'
              enableCellSelect={true}
              columns={this.getColumns()}
              rowGetter={this.getRowAt}
              rowsCount={this.getSize()}
              toolbar={<Toolbar />}
              rowHeight={50}
              minHeight={600}
              />

      );
    }
  });
  ReactDOM.render(<Example />, mountNode);
`;


module.exports = React.createClass({

  render: function() {
    return(
      <div>
        <h3>All the features grid</h3>
        <p>This example demonstrates all the features from the previous examples. The ReactDataGrid with addons is globally available in this example so you need to have 'react-data-grid-with-addons.js' on the page or require('react-data-grid'/addons) if you are using Common JS.</p>
        <p>Fake data is generated using the <a href="https://github.com/Marak/faker.js">Faker</a> library which is also a global variable in this example.</p>
        <ReactPlayground codeText={AllFeaturesExample} />
      </div>
    )
  }

});
