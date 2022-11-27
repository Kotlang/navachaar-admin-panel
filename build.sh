rm -Rf generated
mkdir generated
cd ./social-model
protoc --js_out=import_style=commonjs:../src/generated \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:../src/generated \
    *.proto
cd ..

cd ./auth-model
protoc --js_out=import_style=commonjs:../src/generated \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:../src/generated \
    *.proto
cd ..
