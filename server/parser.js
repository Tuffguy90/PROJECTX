let a = [
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    subsidary_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    createdBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    updatedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  },
  /**
     * subsidary 
     */
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false
    },
    short_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    createdBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    updatedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  },
  /**
   * mattrix master
   */
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    createdBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    updatedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  },
  /**
   * susidary_mattrix_mapping
   */
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    subsidary_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    mattrix_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    updatedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  },
  /**
  * head master
  */
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    sub_mat_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    subsidary_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    mattrix_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    head_name: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    createdBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    updatedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  },
  /**
  * shead meta
  */
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    subsidary_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    mattrix_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    head_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    head_value: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    financial_year: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    month: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    updatedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedBy: {
      allowNull: true,
      type: Sequelize.INTEGER
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  }

]
