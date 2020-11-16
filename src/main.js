import { renderVueApp } from "./utils/render";
import { SERVER } from "./config";
/**
 * get app meta data here,also consider for example:
 * @example 
 * fetch('./server).then(res=>{
 *    const serverMetaData = res.data;
 *   
 *    renderVueApp();
 * })
 * 
 */
fetch('./data.json').then(async res=>{
  const metaData =  await res.json();
  SERVER.FakeAuth = metaData.FakeAuth;
  renderVueApp();
});
