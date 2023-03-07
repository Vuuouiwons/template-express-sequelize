# installasi depedencies
npm install

# buat database
npx sequelize-cli db:create

# model tidak dibuat karena sudah ada
# npx sequelize-cli model:generate --name <table_name> --attributes col_name:data_type,col_name:data_type,col_name:data_type
# npx sequelize-cli model:generate --name test --attributes data:string
# npx sequelize-cli model:generate --name todo_list --attributes title:string,description:string,check:boolean,id_user:integer

# migrasikan model ke database yang telah dibuat
npx db:migrate