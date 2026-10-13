import {test} from '@playwright/test'

//annotations:skip,fail,fixme,slow,only,skip conditionally


test.skip('test one',async({page})=>{

})

//npx playwright test AnnotationsAndTags.spec.js --project=firefox --headed