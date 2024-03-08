use admin;

db.createUser({ user: "fire",pwd: "fire123", roles: [ "root" ]})


use optimize_auth;

db.config_props.insertMany([{ 
  "key": "spring.mail.username",
  "value": "AKIARXE77VQCE3X6QKUD"
},{
  "key": "spring.mail.password",
  "value": "BIElGJU2hcP5KE7QmXkzUL7jwRO/NQ02n/+SqZHDMO7J"
},{ 
  "key": "app.keycloak.client-secret",
  "value": "fireflink-secret"
},{ 
  "key": "app.keycloak.login.url",
  "value": "http://localhost:8080/realms/FireFlink/protocol/openid-connect/token"
},{ 
  "key": "server.hostname",
  "value": "localhost"
},{ 
  "key": "spring.kafka.bootstrap-servers",
  "value": "localhost:9092"
},{ 
  "key": "tyss.hostname",
  "value": "localhost"
},{ 
  "key": "keycloak.auth-server-url",
  "value": "http://localhost:8080"
},{ 
  "key": "kafka.bootstrap-servers",
  "value": "localhost:9092"
},{ 
  "key": "conditionMigrate.hostname",
  "value": "localhost"
},{ 
  "key": "spring.kafka.producer.bootstrap-servers",
  "value": "localhost:9092"
},{ 
  "key": "max.request.size",
  "value": "200000000"
},{ 
  "key": "fetch-max-bytes",
  "value": "200000000"
},{ 
  "key": "fireflink.elasticsearch.user",
  "value": "elastic"
},{
  "key": "fireflink.elasticsearch.password",
  "value": "ZmlyZWZsaW5rCg=="
},{
  "key": "fireflink.elasticsearch.authenticated",
  "value": "true"
},{
  "key": "redirect.contactus.url",
  "value": "https://www.fireflink.com/contact"
},{
  "key": "optimize.temp.dir",
  "value": "/home/TYSS/tyss-projects-jars/work"
},{
  "key": "variable.get.url",
  "value": "http://localhost/project/optimize/v1/variable/"
},{
  "key": "file.delete.url",
  "value": "http://localhost/project/optimize/v1/file/"
},{
  "key": "folder.service.url",
  "value": "http://localhost/project/optimize/v1/folders/"
},{
  "key": "script.service.url",
  "value": "http://localhost/project/optimize/v1/scripts/modules/"
},{
  "key": "file.upload.path",
  "value": "/home/TYSS/files/"
},{
  "key": "file.upload.url",
  "value": "http://localhost/project/optimize/v1/file/folder/"
},{
  "key": "file.download.url",
  "value": "http://localhost/project/optimize/v1/file/download/cloud/"
},{
  "key": "allTree.service.url",
  "value": "http://localhost/alltrees/optimize/v1/trees/folders/"
},{
  "key": "spring.kafka.producer.buffer-memory",
  "value": "200000000"
},{
  "key": "user.restriction.publicKey",
  "value": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCYWSA11ErSvKEhnrHBM/MoEYHcjRrOAb81cd8gQF3K+lffjyeTvXYfRue2yyTXFnzum4WHXGK3Nwvm1ib1NH5qA4bxZ/ubruY+gUtaOFxixfyJNgtB332eKLDZfyz0VE25dTbbDrQzLYQatfstrtdSrs8hFQZYtfcRi6VtOoXJ4QIDAQAB"
},{
  "key": "user.restriction.onPrem",
  "value": "Bk7RjDwOaDjuhnJLXRVprEyDNJPBkyyvVDtBvLT0pXiarGOllFTuSluEIutC6bG79y/WxvJmS1Wz+pLhhW2VBBxv53Ucl8icoA9OuTOBTTuouYMOEAeVUwiwFfaSpwKzUT5EwPXPddt5y2W4HBWZkyDlQaUecg7Ll4ujN3nGLFE="
},{
  "name": "storage.fileId",
  "value": "License/{licenseId}/Execution/"
},{
  "key":"FireFlink.activate.change.password.url",
  "value":"http://localhost/change-password"
},{
  "key":"FireFlink.activate.signup.url",
  "value":"http://localhost/otp-verification"
},{
  "key": "cloud.storageType",
  "value": "clouds3"
},{
"key": "storage.bucket.name",
"value": "fireflink-onprem"
},{
"key": "storage.access.key",
"value": "nGgH0dlRQpWMEbioXPqQETWf26v2HsuIcx1Jafe9/0Y="
},{
"key": "storage.secret.key",
"value": "EheXvLm7EUIXISWuwgtHBfu5sUeHE49CisGs9yapYmlmOburDrGOilGKf8ZmJoY4"
},{
"key": "storage.type",
"value": "cloudS3"
},{
"key": "storage.username",
"value": "na"
},{
"key": "storage.password",
"value": "na"
},{
"key": "storage.ip",
"value": "na"
},{
"key": "storage.domain",
"value": "na"
},{
"key" : "storage.driver.bucket.name",
"value" : "web-drivers"
},{
"key": "shared.drive.http.download.url",
"value": "http://localhost/updates/"
},{
  "key": "spring.security.oauth2.client.provider.keycloak.issuer-uri",
  "value": "http://localhost:8080/realms/FireFlink"
},{
  "key": "spring.security.oauth2.resourceserver.jwt.jwk-set-uri",
  "value": "http://localhost:8080/realms/FireFlink/protocol/openid-connect/certs"
},{
   "key": "spring.security.oauth2.resourceserver.jwt.issuer-uri",
   "value": "http://localhost:8080/realms/FireFlink"
},{
"key" : "embedded-mongo.distribution-url",
"value" : "https://product-utility.s3.ap-south-1.amazonaws.com/EmbeddedMongo/"
},{
"key" : "kafka-topic-replicationfactor",
"value" : "1"
},{
"key" : "client.system.config.server.url",
"value" : "http://localhost/clientsystemconfig/optimize/v1/public/client/"
},{
   "key" : "domain.name",
   "value" : "http://localhost"
},{
  "key": "spring.mail.host",
  "value": "email-smtp.us-east-2.amazonaws.com"
},{
  "key": "FireFlink.activate.signin.url",
  "value": "http://localhost/signin"
},{
  "key": "config.springKafkaBootStrapServers",
  "value": "localhost:9092"
}])
db.StorageConfig.insertMany([{
  "_id": "STR1001",
  "licenseId": "LIC4900",
  "type": "cloudS3",
  "inputs": {
    "bucketName": "fireflink-onprem"
  },
  "outputs": {
    "bucketName": "fireflink-onprem",
    "dirName": ""
  },
  "_class": "com.tyss.optimize.data.models.dto.storage.StorageConfig",
  "accessKey": "nGgH0dlRQpWMEbioXPqQETWf26v2HsuIcx1Jafe9/0Y=",
  "secretKey": "EheXvLm7EUIXISWuwgtHBfu5sUeHE49CisGs9yapYmlmOburDrGOilGKf8ZmJoY4"
}])
db.integrations.insertMany([{
  "externalPlugins": [
    "Local",
    "Browserstack",
    "SauceLabs",
    "LambdaTest"
  ],
  "default": true
}])

