import { BigInt } from "@graphprotocol/graph-ts"
import {
  Factory,
  AdminChanged,
  BootstrapSetted,
  Candidate,
  FeeBasePointUpdated,
  FeetoUpdated,
  PairCreateLocked,
  PairCreateUnlocked,
  PairCreated
} from "../generated/Factory/Factory"
import { ExampleEntity } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.admin(...)
  // - contract.adminCandidate(...)
  // - contract.allPairs(...)
  // - contract.allPairsLength(...)
  // - contract.createPair(...)
  // - contract.feeBasePoint(...)
  // - contract.feeto(...)
  // - contract.getBootstrap(...)
  // - contract.getPair(...)
  // - contract.lockForPairCreate(...)
  // - contract.pairCodeHash(...)
}

export function handleBootstrapSetted(event: BootstrapSetted): void {}

export function handleCandidate(event: Candidate): void {}

export function handleFeeBasePointUpdated(event: FeeBasePointUpdated): void {}

export function handleFeetoUpdated(event: FeetoUpdated): void {}

export function handlePairCreateLocked(event: PairCreateLocked): void {}

export function handlePairCreateUnlocked(event: PairCreateUnlocked): void {}

export function handlePairCreated(event: PairCreated): void {}
