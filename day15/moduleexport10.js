console.log('module initaialized')
function inner(){
    console.log(
        'inner'
    )
}
exports.api = function(){
    inner()
    console.log('module export')
}