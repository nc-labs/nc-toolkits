const pathConvert = (path: string) => ['/', path.replace(/index$/, '').toLowerCase()].join('')
const slugConvert = (path: string) => path.split(/\]/).join('').split(/\/\[/).join('/:') // thay thees /[slug] thành /:slug

const pagePathToRoutePath = (pagePath: string) => {
  const pathWithSlugRegex = /^(\/[a-z][^\]/\s]*|\/\[[a-z][^/\s]*\])+$|^\/$/g
  let path = pathConvert(pagePath)

  if (!pathWithSlugRegex.test(path)) {
    console.warn('[nc-toolkits]', pagePath, 'is invalid path.')
    return null
  } // không tạo route nếu không đúng định dạng

  path = slugConvert(path)
  return path
}

// TODO xử lý trường hợp 2 slug trùng tên
export { pagePathToRoutePath }
