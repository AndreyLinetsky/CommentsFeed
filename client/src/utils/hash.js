import md5 from 'md5'

export function hashMd5(value){
 return md5(value.trim().toLowerCase());
}