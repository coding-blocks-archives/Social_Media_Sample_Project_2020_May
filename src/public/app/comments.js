function loadComments(){
    $.get(`/api/post/${3}`, (comments) => {
      console.log('bye')
        for (let c of comments) {
          $('#comments-container').append(
            $(`
            <div class="card">
            <div class="card-header">
            ${c.title}
            </div>
            <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p>${c.body}</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">${c.user.username}</cite></footer>
            </blockquote>
            </div>
            </div>
            
            `)
          )
        }
       
      })

}