import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTags1627843167451 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tags',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
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
                
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tags')
    }

}
