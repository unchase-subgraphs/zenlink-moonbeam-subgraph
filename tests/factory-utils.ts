import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BootstrapSetted,
  Candidate,
  FeeBasePointUpdated,
  FeetoUpdated,
  PairCreateLocked,
  PairCreateUnlocked,
  PairCreated
} from "../generated/Factory/Factory"

export function createAdminChangedEvent(
  oldAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBootstrapSettedEvent(
  tokenA: Address,
  tokenB: Address,
  bootstrap: Address
): BootstrapSetted {
  let bootstrapSettedEvent = changetype<BootstrapSetted>(newMockEvent())

  bootstrapSettedEvent.parameters = new Array()

  bootstrapSettedEvent.parameters.push(
    new ethereum.EventParam("tokenA", ethereum.Value.fromAddress(tokenA))
  )
  bootstrapSettedEvent.parameters.push(
    new ethereum.EventParam("tokenB", ethereum.Value.fromAddress(tokenB))
  )
  bootstrapSettedEvent.parameters.push(
    new ethereum.EventParam("bootstrap", ethereum.Value.fromAddress(bootstrap))
  )

  return bootstrapSettedEvent
}

export function createCandidateEvent(newAdmin: Address): Candidate {
  let candidateEvent = changetype<Candidate>(newMockEvent())

  candidateEvent.parameters = new Array()

  candidateEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return candidateEvent
}

export function createFeeBasePointUpdatedEvent(
  basePoint: i32
): FeeBasePointUpdated {
  let feeBasePointUpdatedEvent = changetype<FeeBasePointUpdated>(newMockEvent())

  feeBasePointUpdatedEvent.parameters = new Array()

  feeBasePointUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "basePoint",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(basePoint))
    )
  )

  return feeBasePointUpdatedEvent
}

export function createFeetoUpdatedEvent(feeto: Address): FeetoUpdated {
  let feetoUpdatedEvent = changetype<FeetoUpdated>(newMockEvent())

  feetoUpdatedEvent.parameters = new Array()

  feetoUpdatedEvent.parameters.push(
    new ethereum.EventParam("feeto", ethereum.Value.fromAddress(feeto))
  )

  return feetoUpdatedEvent
}

export function createPairCreateLockedEvent(caller: Address): PairCreateLocked {
  let pairCreateLockedEvent = changetype<PairCreateLocked>(newMockEvent())

  pairCreateLockedEvent.parameters = new Array()

  pairCreateLockedEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return pairCreateLockedEvent
}

export function createPairCreateUnlockedEvent(
  caller: Address
): PairCreateUnlocked {
  let pairCreateUnlockedEvent = changetype<PairCreateUnlocked>(newMockEvent())

  pairCreateUnlockedEvent.parameters = new Array()

  pairCreateUnlockedEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return pairCreateUnlockedEvent
}

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  pair: Address,
  param3: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("param3", ethereum.Value.fromUnsignedBigInt(param3))
  )

  return pairCreatedEvent
}
