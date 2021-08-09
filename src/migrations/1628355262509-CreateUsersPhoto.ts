import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersPhoto1628355262509 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'photos',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: "user_photo_id",
                        type: "uuid",
                    },
                    {
                        name: 'url_photo',
                        type: 'varchar',    
                    },
                    {
                        name: 'created_At',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_At',
                        type: 'timestamp',
                        default: 'now()'
                    }
                
                ],
                foreignKeys:[
                    {
                        name: "FKUserId",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_photo_id"],
                        onDelete: "CASCADE",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('photos')
    }

}
