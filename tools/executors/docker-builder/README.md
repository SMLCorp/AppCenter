
## Package

This is a nx executor used to package the docker images

List of options:  
```
--build  
Type: Boolean
Indicates if we build the project before docker image
default: true

--push  
Type: Boolean
Indicates if we the docker image to the registry
default: false

--registry
Type: String
Docker registry to push the docker image
default: https://registry.gitlab.com/sonny.miel/app-center

--tag
Type: String
Version to push to registry
default: local
```
Every time we make a change to ```impl.ts``` we need to compile it using  
```yarn tsc tools/executors/package/impl.ts```


