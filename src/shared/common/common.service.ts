import { Injectable, Scope } from '@nestjs/common';
import { EntityManager, Repository, Connection } from 'typeorm';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { getEntityManagerToken } from '@nestjs/typeorm';

/**
 * @description 매 요청마다 EntityManager와 Repository인스턴스를 새로 생성
 */
@Injectable({ scope: Scope.REQUEST })
export class CommonService {

    constructor(
        private moduleRef: ModuleRef,
    ) { }

    private async getEntityManager(systemId: string): Promise<EntityManager> {
        const contextId = ContextIdFactory.getByRequest(undefined);
        const entityManager = await this.moduleRef.resolve<EntityManager>(
            getEntityManagerToken(systemId),
            contextId,
            { strict: false },
        );
        return entityManager;
    }

    async getRepository(systemId: string, entity: any): Promise<Repository<any>> {
        const manager = await this.getEntityManager(systemId)
        return manager.getRepository(entity)
    }

}

