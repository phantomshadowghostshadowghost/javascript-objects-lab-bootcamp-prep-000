var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var lmd = delete object[key]
  return lmd
}

function destructivelyDeleteFromObjectByKey(object, key){
 var newObj = object.assign({}, obj)
}