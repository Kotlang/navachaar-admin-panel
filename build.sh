rm -Rf src/generated
mkdir src/generated
cd social-model
protoc -I=. *.proto \
    --js_out=import_style=commonjs,binary:../src/generated \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:../src/generated
cd ..

cd auth-model
protoc -I=. *.proto \
    --js_out=import_style=commonjs,binary:../src/generated \
    --grpc-web_out=import_style=typescript,mode=grpcwebtext:../src/generated
cd ..
