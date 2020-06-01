$('#write-btn').click(() => {
  const userId = JSON.parse(window.localStorage.user).id
  console.log(userId + "asdasdas")
  const title = $('#p-title').val()
  const body = $('#p-body').val()

  $.post('/api/posts', { userId, title, body }, (data) => {
    $('#content').load('/components/my-posts.html')
    $('.nav-item .active').removeClass('active')
    $("[data-components='my-posts']").addClass('active')
  })
})