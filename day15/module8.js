
        window.Mymodule = window.Mymodule || (function(){
            console.log('initialized')
            function api(){
                console.log('api')
            }
            return {
                api
            }
        }())

        