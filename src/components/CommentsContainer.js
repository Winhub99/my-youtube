import React from 'react'

const Comment=({data})=>{
const {name,text,replies}= data
    return (
        <div className='flex my-1 bg-gray-100 shadow-lg'>
        <div className=''>
            <img className='h-16  mr-1 pr-1' src='https://tse1.mm.bing.net/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&pid=Api&P=0&h=180'></img>

        </div>
        <div>
            <h1 className='font-bold'>{name}</h1>
            <p>{text}</p>
        </div>
        </div>
    )
}

const CommentsList=({comments})=>{
    return comments.map((item,index)=> (
    <div>
        <Comment data={item} key={index}/>
        <div className=' ml-5 p-2 border border-l-black'>    
            <CommentsList comments={item.replies}/>
        </div>
    </div>
    ))
}

const CommentsContainer = () => {

    const commentsData=[
        {
        name:"Dyma Mite",
        text:"Lorem ipsum dora mifasa mufasa sasa",
        replies:[]
    },
    {
        name:"Dyma Mite",
        text:"Lorem ipsum dora mifasa mufasa sasa",
        replies:[
            {
                name:"Dyma Mite",
                text:"Lorem ipsum dora mifasa mufasa sasa",
                replies:[]
            },
            {
                name:"Dyma Mite",
                text:"Lorem ipsum dora mifasa mufasa sasa",
                replies:[
                    {
                        name:"Dyma Mite",
                        text:"Lorem ipsum dora mifasa mufasa sasa",
                        replies:[]
                    },
                    {
                        name:"Dyma Mite",
                        text:"Lorem ipsum dora mifasa mufasa sasa",
                        replies:[]
                    }
                ]
            },
            {
                name:"Dyma Mite",
                text:"Lorem ipsum dora mifasa mufasa sasa",
                replies:[
                    {
                        name:"Dyma Mite",
                        text:"Lorem ipsum dora mifasa mufasa sasa",
                        replies:[
                            {
                                name:"Dyma Mite",
                                text:"Lorem ipsum dora mifasa mufasa sasa",
                                replies:[
                                    {
                                        name:"Dyma Mite",
                                        text:"Lorem ipsum dora mifasa mufasa sasa",
                                        replies:[]
                                    },   {
                                        name:"Dyma Mite",
                                        text:"Lorem ipsum dora mifasa mufasa sasa",
                                        replies:[]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name:"Dyma Mite",
                        text:"Lorem ipsum dora mifasa mufasa sasa",
                        replies:[]
                    }
                ]
            }
        ]
    },
    {
        name:"Dyma Mite",
        text:"Lorem ipsum dora mifasa mufasa sasa",
        replies:[]
    },
    {
        name:"Dyma Mite",
        text:"Lorem ipsum dora mifasa mufasa sasa",
        replies:[
            {
                name:"Dyma Mite",
                text:"Lorem ipsum dora mifasa mufasa sasa",
                replies:[]
            },
            {
                name:"Dyma Mite",
                text:"Lorem ipsum dora mifasa mufasa sasa",
                replies:[]
            },
            {
                name:"Dyma Mite",
                text:"Lorem ipsum dora mifasa mufasa sasa",
                replies:[
                    {
                        name:"Dyma Mite",
                        text:"Lorem ipsum dora mifasa mufasa sasa",
                        replies:[
                            {
                                name:"Dyma Mite",
                                text:"Lorem ipsum dora mifasa mufasa sasa",
                                replies:[
                                    {
                                        name:"Dyma Mite",
                                        text:"Lorem ipsum dora mifasa mufasa sasa",
                                        replies:[]
                                    },
                                    {
                                        name:"Dyma Mite",
                                        text:"Lorem ipsum dora mifasa mufasa sasa",
                                        replies:[]
                                    },
                                    {
                                        name:"Dyma Mite",
                                        text:"Lorem ipsum dora mifasa mufasa sasa",
                                        replies:[
                                            {
                                                name:"Dyma Mite",
                                                text:"Lorem ipsum dora mifasa mufasa sasa",
                                                replies:[
                                                    {
                                                        name:"Dyma Mite",
                                                        text:"Lorem ipsum dora mifasa mufasa sasa",
                                                        replies:[
                                                            {
                                                                name:"Dyma Mite",
                                                                text:"Lorem ipsum dora mifasa mufasa sasa",
                                                                replies:[]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"Dyma Mite",
        text:"Lorem ipsum dora mifasa mufasa sasa",
        replies:[]
    }

]
  return (
    <div className='m-2 p-2'>
      <h1 className='text-xl font-bold'>Comments:</h1>
       <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
