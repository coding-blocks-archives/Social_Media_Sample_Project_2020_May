function loadPosts() {
  const user = JSON.parse(window.localStorage.user)
  let display='show'
  $.get('/api/posts', (posts) => {
    for (let p of posts) {
      $('#posts-container').append(
        $(`
        <div class="col-4">
          <div class="card m-2">
            <div class="card-body" id="card">
              <h5 class="card-title">${p.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
              <p class="card-text">
                ${p.body.substr(0, 200)}
                <a href="#">...read more</a>
              </p> 
              
              <div class="form-inline" id ="collapseExample">
                <input id="comment" type="text" class="form-control mb-2 mr-sm-2"  placeholder="${user.username}">
                <button type="submit" id= "${p.id}" class=" btn-primary mb-2 btn-sm">comment</button>
                <button type="submit" id= "${display}-${p.id}" class="btn-primary mb-2 btn-sm">show</button>
              </div>
              <div id="commentListId-${p.id}">
              </div>
            </div>
          </div>
        </div>
        `)
      )
      /*handle post req*/
      $(`#${p.id}`).click(()=>{
        const postId = p.id
        const userId = user.id
        const title = user.username
        const body = $('#comment').val()

        $.post('/api/comments', {postId, userId, title, body}, (data)=>{
          console.log('ok sent', data.postId)
        })
      })
      /*handle get req*/
        function comments(){
          $.get(`/api/comments?postId=${p.id}`, (comments)=>{
            for(let c of comments){
              $(`#commentListId-${p.id}`).append(
                $(`
                <div class="card" style="width: 18rem;" id="comment-card">
                  <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">${c.user.username}</h6>
                    <p class="card-text">${c.body}</p>
                  </div>
                </div>
                `)
              )
            }
           })
        }
        /*Handling button click event*/
        $(`#${display}-${p.id}`).click(()=>{
          if(display==='show'){
            comments()
            $(`#commentListId-${p.id}`).show()
            // console.log($(`#${display}-${p.id}`).text('hide'))
            $(`#${display}-${p.id}`).text('hide')
          display='hide'
          }
          else if(display==='hide'){
            $(`#${display}-${p.id}`).text('show')
            $(`#commentListId-${p.id}`).hide()
            display='show'
          }
        })
      /*end get req*/
    }
    /*for loop end here*/
  })
}