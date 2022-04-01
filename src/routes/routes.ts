import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route{
  to:string;
  path:string;
  Component:LazyExoticComponent<JSXComponent> | JSXComponent;
  name:string;
}

const LazyLayout = lazy(() => import(/* webpackChunckName: "LazyPage1" */'../01-lazyload/layout/LazyLayout'));

export const router:Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy Layout'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  }
];