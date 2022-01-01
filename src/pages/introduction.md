<div class="h-10" />

# Introduction

Vuwi has been developed as CSS components powered by Vue. 
Rather than building a framework that uses Tailwind CSS as a styling guide, Vuwi treats
the CSS as a first-class citizen. Vue was the chosen JavaScript framework because of its small footprint, 
versatility and range of functionality.

## What is Vuwi?

Vuwi is a complete UI framework built using Vue.js and Tailwind CSS. The goal of the project is to enable 
designers to turn their CSS concepts into full-fledged applications, while at the same time providing 
developers with UI components that are easy to use and if needed modify.

Vuwi takes a design-first approach, taking your designs and turning them into working applications.

> Vuwi is designed to allow designers and developers to modify every aspect with ease.

## Why Vuwi?

Vuwi was built based on a minimalistic approach for building applications. Below are some of the philisophies
that make up the core of Vuwi:

### Simple APIs

Vuwi's component APIs are simple without compromising customization. There are two parts to a component, 
*functionality* and *styling*. Too often UI frameworks mix both in their APIs. Vuwi separates the two
when possible so the look and feel is driven by CSS and the functionality (or behavior) is driven by JavaScript.

### Customization

In Vuwi, each component style can be overwritten at different levels, here are example from highest to lowest level:

#### Class

Most of the time, by adding additional classes, the look of the component can be changed to something completely different.

#### Theme

Vuwi is built around theming. It is as simple as copying the default theme and them modifying the css files. Mutiple themes
can be supported in your application allowing the user to drive the look they desire to have.

#### Component

Single changes can be made to each component to allow for uniqueness without having to create an entirely new theme. 

#### Configuration

Vuwi uses Tailwind CSS as its configuration and compiler. Tailwind provides some additional features that Tailwind CSS
does not currently offer. You can globally control any styling feature of Tailwind CSS via the configuration, such
as default theme, spacing, sizing, etc.

### Developer tooling

Vuwi's development platform is built on Vitesse - an opinionated Vite starter template. It offers some
powerful features that make building applications automatic such as auto imports of pages, components and icons
and providing tooling around testing, CI and server-side rendering.

<div class="h-10" />