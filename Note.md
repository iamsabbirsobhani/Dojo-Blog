## The Composition API

 1. Composition API Basics

> we can perform any JavaScript coding into setup() function. we can
> create function, variable, object, import function from other
> component by importing them etc. We can perform Option API as well as
> Composition API simultaneously. Option API generally think to build
> simple project while Composition API think to complex and large
> project. But both are useful under the different circumstances. We can
> `return{}` the values inside the `setup()` function if we want to make
> them accessible in the `<template>`. This is the very basic of how to
> use the Composition API. We make a setup function or setup if you
> prefer to call it that way, that always runs first before created
> before mounted etc. And, inside this `setup()`, we can run any
> JavaScript Such as create values or create functions. Then at the end
> down`(line 38) on commit  4` here in `return{},` we just return
> whatever values or functions we want to make available to the
> component `<template>`.
