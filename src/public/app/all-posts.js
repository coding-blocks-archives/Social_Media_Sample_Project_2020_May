function loadPosts() {
  const user = JSON.parse(window.localStorage.user)
    $.get('/api/posts', (posts) => {
      for (let p of posts) {
        /* $('#posts-container').append(
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
                  <input id="comment-${p.id}" type="text" class="form-control mb-2 mr-sm-2"  placeholder="${user.username}">
                  <button type="submit" id= "${p.id}" class=" btn-primary mb-2 btn-sm">comment</button>
                  <button type="submit" id= "${display}-${p.id}" class="btn-primary mb-2 btn-sm">show</button>
                </div>
                <div id="commentListId-${p.id}">
                </div>
              </div>
            </div>
          </div>
          `)
        ) */
        $('#posts-container').append(
          $(`
          <div class="col-4">
            <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                <p class="card-text">
                  ${p.body.substr(0, 200)}
                  <a href="/components/singlepost.html?q1=${p.id}">...read more</a>
                </p>
                <div id ="collapseExample">
                  <input id="comment-${p.id}" type="text" class="form-control mb-2 mr-sm-2">
                  <button type="submit" id= "${p.id}" class=" btn-primary mb-2 btn-sm">comment</button>
                  
                </div>
                <div id="ListId-${p.id}">
              </div>
              </div>
            </div>
          </div>
          
          `)
        )

        $(`#${p.id}`).click(()=>{

          const postId = p.id
          const userId = user.id
          const title = user.username
          const body = $(`#comment-${p.id}`).val()
  
          $.post('/api/comments', {postId, userId, title, body}, (data)=>{
            console.log('ok sent', data.postId)
          })
          comments()
        })

          function comments(){
            $.get(`/api/comments?postId=${p.id}`, (comments)=>{
              $(`#commentListId-${p.id}`).empty()
              for(let c of comments){
                $(`#ListId-${p.id}`).append(
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
          
          comments()
      }
    })
  }

