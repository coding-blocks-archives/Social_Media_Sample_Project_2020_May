$("#write-btn").click(() => {
  const userId = JSON.parse(window.localStorage.user).id
  const title = $("#p-title").val()
  const body = $("#p-body").val()

  $.post("/api/posts", { userId, title, body }, async (data) => {
    // console.log(data)
    await $("#content").load("/components/my-posts.html")
    await $(".nav-item .active").removeClass("active")
    await $("[data-components='my-posts']").addClass("active")
  })
})
