const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];
  const form =  document.querySelector('.js-form');
  const inputs = form.querySelectorAll('input');
  const list =  document.querySelector('.js-list');
  const sourse = document.querySelector('#product-card').innerHTML.trim();
  const tpl = Handlebars.compile(sourse);
  
  const filter = { 
    size: [], 
    color: [], 
    release_date: [],
  }
  
  function log(str){
    console.log(str)
  }
  
  const resetFilter = () => {
    filter.size = [];
    filter.color = [];
    filter.release_date = [];
  }
  
  const getChecked = function(e){
    e.preventDefault();
  
    const arrInputs = Array.from(inputs);
    arrInputs.filter(input => input.checked).map(item => {
      if(item.name === 'size'){
        filter.size.push(item.value)
      };
      if(item.name === 'color'){
        filter.color.push(item.value)
      };
      if(item.name ==='release_date'){
        filter.release_date.push(item.value)
      }
    });
  
  const newArray = filterItems(laptops, filter)

      marcupHTML(newArray);
     
      resetFilter();
  } 
  
  const marcupHTML = (arr) => { 
    const marcup = arr
      .reduce((acc, laptop) => acc + tpl(laptop), '');
      list.innerHTML = marcup;
  }
  
  const getLaptopBySize = (arr, sizes) =>
  arr.filter(produkt => sizes.length
    ? sizes.some((size) => produkt.size == size)
    : true);
  
  const getLaptopByColor = (arr, colors) =>
    arr.filter(produkt => colors.length
      ? colors.some((color) => produkt.color == color)
      : true);
  
  const getLaptopByRelease = (arr, dates) =>
    arr.filter(produkt => dates.length
      ? dates.some((item) => produkt.release_date == item)
      : true);
  
  const filterItems = (arr, options) => {
    const filteredBySize = getLaptopBySize(arr, options.size)
    const filteredByColor = getLaptopByColor(filteredBySize, options.color)
    const filteredByRelease = getLaptopByRelease(filteredByColor, options.release_date)
  
    return filteredByRelease
  }
  
 
   marcupHTML (laptops);

  form.addEventListener("submit", getChecked);
  form.addEventListener("reset", resetFilter);