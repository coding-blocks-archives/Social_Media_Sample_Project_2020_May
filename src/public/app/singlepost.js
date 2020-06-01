$(()=>{
    $('#navbar').load('/components/navbar.html', loginIfNeeded())
    $('#footer').load('/components/footer.html')
    $("#content").load("/Components/Content.html",()=>{
        const user = JSON.parse(window.localStorage.user).id
        const params = new URLSearchParams(location.search);
        const postid=params.get('q1');
        //const userid=params.get('q2');
        let url="/api/posts/"+postid;
        $.get(url,(p)=>{
            $('#container').append(
                $(`
          <div style="text-align: center;" class="col-4">
            <div class="card m-2">
              <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                <p class="card-text">
                  ${p.body}
                  
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
                    //$(`#commentListId-${p.id}`).empty()
                    for(let c of comments){
                      $(`#ListId-${p.id}`).append(
                        $(`
                        <divstyle="text-align: center;" class="card" style="width: 18rem;" id="comment-card">
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
              console.log(p)
            
          

        })
        
    })
})


function loginIfNeeded() {
  window.currentUser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null
  if (!currentUser) {
    $.post('/api/users', {}, (user) => {
      if (user) {
        console.log('registered current user as ', user.username)
        window.localStorage.user = JSON.stringify(user)
        currentUser = user
        $('#nav-username').text(currentUser.username)
      }
    })
  } else {
    console.log('resuming session as ', currentUser.username)
    console.log($('#nav-username'))
    $('#nav-username').text(currentUser.username)
  }
}