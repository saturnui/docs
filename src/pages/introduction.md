<div class="h-10" />

# Introduction

Vuwi was created around the concept of leveraging the power of the popular CSS framework, TailwindCSS. 
Rather than building a framework that uses Tailwind as a styling guide, Vuwi treats
Tailwind as a first-class citizen. Vue was the chosen JavaScript framework because of its small footprint, 
versatility and range of functionality.

## What is Vuwi?

Vuwi is a complete UI framework built using Vue.js and TailwindCSS. The goal of the project is to provide
a platform designers could easily use to turn their CSS concepts into full-fledged applications with
ease while providing developers with a JavaScript framework that has been proven and is well-supported by
the community.

Vuwi takes a design-first approach which means you should be able to take a design and using Vuwi develop
that design into a fully working application or set of components.

## Why Vuwi?

Vuwi was built based on a minimalistic approach for building applications. Below are some of the philisophies
that make up the core of Vuwi:

### Simple APIs

Vuwi's component APIs are simple without compromising customization. There are two parts to a component, 
*functionality* and *styling*. Too often UI frameworks mix both in their APIs. Vuwi separates the two
when possible so the look and feel is driven by Tailwind and the functionality is driven by Vue. The components
themselves could be considered headless component designs and Vue is the driving engine to make them functional.

### Customization

In Vuwi, each component can be overwritten at different levels, here are example from highest to lowest level:

#### Class

Many times you can change or add to a component's style using the HTML *class* tag.

#### Theme

*Coming soon.* In Vuwi you can change theme which will change all styles.

#### Component

Each component has a property called **root-class** which will allow you to create one-off style
changes for overriding the component's style.

#### Configuration

Vuwi uses WindiCSS as its configuration and compiler. Windi provides some additional features that Tailwind
does not currently offer. You can globally control any styling feature of Tailwind via the configuration, such
as default theme, spacing, sizing, etc.

### Developer tooling

Vuwi's development platform is built on Vitesse - an opinionated Vite starter template. It offers some
powerful features that make building applications automatic such as auto imports of pages, components and icons
and providing tooling around testing, CI and server-side rendering.

<div class="h-10" />