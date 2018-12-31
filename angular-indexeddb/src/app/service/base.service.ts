import { IdbService } from './idb.service';
import { IDataBase, DATA_TYPE, ITable } from 'jsstore';

export class BaseService {

  dbname = 'Angular_Demo';

  constructor() {
    this.connection.setLogStatus(true);
    this.initJsStore();
  }

  get connection() {
    return IdbService.idbCon;
  }

  initJsStore() {
    this.connection.isDbExist(this.dbname).then(isExist => {
      if (isExist) {
        this.connection.openDb(this.dbname);
      }
      else {
        const dataBase = this.getDatabase();
        this.connection.createDb(dataBase);
      }
    }).catch(err => {
      alert(err.message);
    });
  }

  private getDatabase() {
    const tblStudent: ITable = {
      name: 'Students',
      columns: [{
        name: 'id',
        primaryKey: true,
        autoIncrement: true,
      },
      {
        name: 'name',
        notNull: true,
        dataType: DATA_TYPE.String
      },
      {
        name: 'gender',
        dataType: DATA_TYPE.String,
        default: 'male'
      },
      {
        name: 'country',
        notNull: true,
        dataType: DATA_TYPE.String
      },
      {
        name: 'city',
        dataType: DATA_TYPE.String,
        notNull: true
      }
      ]
    };

    const dataBase: IDataBase = {
      name: this.dbname,
      tables: [tblStudent]
    };
    
    return dataBase;
  }
}
