creating `<Avatar />`

requirements:
- it should take a URL for the avatar photo
  - it should be optional
  - if not provided, use default avatar photo
- combine JSDoc + TS to provide good documentation

principles
- good defaults
- good DX/API

stretch 
- check if avatar URL valid
  - if invalid (404), show default avatar

- check that valid remote image
  - https://www.zhenghao.io/posts/verify-image-url


todos
- [ ] avatar should not be super big (snapshot?)