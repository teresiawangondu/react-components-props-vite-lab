import Article from "./Article";

// create function articlelist
function ArticleList({posts}){

    return(
        //map and loop over blogpost data
        <main>
 
            {posts.map(({id, title , date,minutes, preview}) => (
            
            <Article  key={id} title={title} date={date} minutes={minutes} preview={preview}/>))}

        </main>
    )
}

export default ArticleList;