async function getAbout (context) {
  context.$q.loading.show()
  const query = context.Bmob.Query('about')
  var res = await query.find()
  return res
}
async function getLink (context) {
  context.$q.loading.show()
  const query = context.Bmob.Query('link')
  query.order('-createdAt')
  var res = await query.find()
  return res
}
function checkInput (context, name, content) {
  if (!name || !content) {
    context.$q.dialog({
      title: '提示',
      message: '输入不能为空',
      ok: '确定'
    })
    return false
  }
  return true
}
async function getCommentFromBmob (context) {
  const query = context.Bmob.Query('comment')
  query.order('-createdAt')
  var res = await query.find()
  return res
}
function getComment (context) {
  context.$q.loading.show()
  context.currentComments = []
  context.lookReply = []
  getCommentFromBmob(context).then(function (res) {
    context.comments = res
    for (let i = (context.currentPage - 1) * context.pageSize; i < context.currentPage * context.pageSize; i++) {
      if (i < context.comments.length) {
        context.currentComments.push(context.comments[i])
        context.lookReply.push(false)
      }
    }
    context.$q.loading.hide()
  })
}
function writeCommentToBmob (context, msg) {
  context.$q.loading.show()
  const query = context.Bmob.Query('comment')
  query.set('name', context.name)
  query.set('content', context.content)
  query.save().then(res => {
    context.$q.loading.hide()
    context.commitDialog = false
    context.$q.dialog({
      title: '提示',
      message: '留言成功',
      ok: '确定'
    }).onOk(() => {
      getComment(context)
      document.documentElement.scrollTop = 0
    })
  }).catch(err => {
    context.$q.loading.hide()
    context.$q.dialog({
      title: '提示',
      message: err.toString(),
      ok: '确定'
    })
  })
}
function writeReplyToBmob (context, id) {
  context.$q.loading.show()
  const query = context.Bmob.Query('comment')
  var date = new Date()
  let data = {
    'name': context.name,
    'content': context.content,
    'date': date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  }
  query.get(id).then(res => {
    res.add('comment', [data])
    res.save().then(res => {
      context.$q.loading.show()
      context.commitDialog = false
      context.$q.dialog({
        title: '提示',
        message: '回复成功',
        ok: '确定'
      }).onOk(() => {
        getComment(context)
        document.documentElement.scrollTop = 0
      })
    }).catch(err => {
      context.$q.loading.hide()
      context.$q.dialog({
        title: '提示',
        message: err.toString(),
        ok: '确定'
      })
    })
  }).catch(err => {
    context.$q.loading.hide()
    context.$q.dialog({
      title: '提示',
      message: err.toString(),
      ok: '确定'
    })
  })
}
async function getTag (context) {
  const query = context.Bmob.Query('tag')
  query.order('tagName')
  var res = await query.find()
  return res
}
async function getArticle (context) {
  context.$q.loading.show()
  const query = context.Bmob.Query('article')
  query.order('-createdAt')
  var res = await query.find()
  return res
}
async function _getArticleByid (context, id) {
  const query = context.Bmob.Query('article')
  query.equalTo('objectId', '==', id)
  var res = await query.find()
  return res
}
async function _getArticleByTag (context, tag) {
  const query = context.Bmob.Query('article')
  query.order('-createdAt')
  if (tag !== '') {
    query.containedIn('tag', [tag])
  }
  var res = await query.find()
  return res
}

export { getAbout, getLink, checkInput, getComment, writeCommentToBmob, writeReplyToBmob, getTag, getArticle, _getArticleByid, _getArticleByTag }
