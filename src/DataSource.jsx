
export const productColumns=[
    {field:"id" ,headerName:"Product ID" , width:100 },
    {filed:'name' ,headerName:"Product Name" ,width:230,renderCell:(params)=>{
        return(
            <div className='flex items-center'>
                <img className='w-8 h-8 object-cover mr-3' src={params.row.image} alt="" />
                <div className='flex flex-col '>
                <p>{params.row.name}</p>
                <p className='text-gray-500'>{params.row.Company}</p>
                </div>
            </div>
        )
    }},
    {field:"Category" ,headerName:"Category" , width:230 },
    {field:"stock" ,headerName:"Stock" , width:230 ,renderCell:(params)=>{
        return <div >
           {params.row.stock > 5 && (
                        <div className="px-2 py-1 w-[100px] text-[rgb(36,89,0)] bg-[#DEF2D0] font-semibold rounded text-center ">
                          {params.row.stock} in stock
                        </div>
                      )}
                      {params.row.stock > 0 && params.row.stock <= 5 && (
                        <div className="px-2 py-1 w-[100px] text-[#5E4F00] bg-[#F9F1C8] font-semibold rounded text-center ">
                          {params.row.stock} in stock
                        </div>
                      )}
                      {params.row.stock <= 0 && (
                        <div className="px-2 py-1 w-[100px] text-[#990000] bg-[#FFDCDC] font-semibold rounded text-center ">
                          No stock
                        </div>
                      )}
        </div>
    }},
    {field :"unitPrice", headerName:"Price" ,width:230,renderCell:(params)=>{
return(
    <div>
        {params.row.unitPrice } per {params.row.contain}{params.row.messure}
    </div>
)
    }}

]


export const productRows = [
    {
      id: "prd001",
      name: "Kit Kat",
      Company: "Nestle",
      Category: "Food",
      unitPrice: 10,
      contain: 1,
      messure: "packet",
      image: require('../src/Assets/Images/kitkat.png'),
      stock: 5,
    },
    {
      id: "prd002",
      name: "Potato",
      Company: "---",
      Category: "Vegitables",
      unitPrice: 40,
      contain: 1,
      messure: "kg",
      image: require('../src/Assets/Images/potato.png'),
      stock: 9,
    },
    {
      id: "prd003",
      name: "Sugar",
      Company: "Nestle",
      Category: "Food",
      unitPrice: 45,
      contain: 1,
      messure: "kg",
      image: require('../src/Assets/Images/sugar.jpeg') ,
      stock: 12,
    },
    {
      id: "prd004",
      name: "Washing Powder",
      Company: "Tide",
      Category: "Household Products",
      unitPrice: 200,
      contain: 8,
      messure: "kg",
      image: require('../src/Assets/Images/tide-8kg.png'),
      stock: 0,
    },
    {
      id: "prd005",
      name: "Line Notebook",
      Company: "ClassMates",
      Category: "Paper Products",
      unitPrice: 38,
      contain: 200,
      messure: "pages",
      image: require('../src/Assets/Images/classmate.png'),
      stock: 24,
    },
    {
      id: "prd006",
      name: "Milk",
      Company: "Milma",
      Category: "Grocery",
      unitPrice: 28,
      contain: 525,
      messure: "ml",
      image:require('../src/Assets/Images/milma.png'),
      stock: 7,
    },
    {
      id: "prd001",
      name: "Kit Kat",
      Company: "Nestle",
      Category: "Food",
      unitPrice: 10,
      contain: 1,
      messure: "packet",
      image:require('../src/Assets/Images/kitkat.png'),
      stock: 5,
    },
    {
      id: "prd002",
      name: "Potato",
      Company: "---",
      Category: "Vegitables",
      unitPrice: 40,
      contain: 1,
      messure: "kg",
      image:require('../src/Assets/Images/potato.png'),
      stock: 9,
    },
    {
      id: "prd003",
      name: "Sugar",
      Company: "Nestle",
      Category: "Food",
      unitPrice: 45,
      contain: 1,
      messure: "kg",
      image: require('../src/Assets/Images/sugar.jpeg'),
      stock: 12,
    },
    {
      id: "prd004",
      name: "Washing Powder",
      Company: "Tide",
      Category: "Household Products",
      unitPrice: 200,
      contain: 8,
      messure: "kg",
      image:require('../src/Assets/Images/tide-8kg.png'),
      stock: 0,
    },
    {
      id: "prd005",
      name: "Line Notebook",
      Company: "ClassMates",
      Category: "Paper Products",
      unitPrice: 38,
      contain: 200,
      messure: "pages",
      image:require('../src/Assets/Images/classmate.png'),
      stock: 24,
    },
    {
      id: "prd006",
      name: "Milk",
      Company: "Milma",
      Category: "Grocery",
      unitPrice: 28,
      contain: 525,
      messure: "ml",
      image: require('../src/Assets/Images/milma.png'),
      stock: 7,
    },
  ];