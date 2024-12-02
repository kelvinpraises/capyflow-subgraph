import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Allocated,
  AllocationUpdated,
  BatchAllocationCompleted,
  Distributed,
  DistributionExecuted,
  Initialized,
  Initialized1,
  OwnershipTransferred,
  PoolActive,
  RecipientRegistered,
  RecipientStatusUpdated,
  Registered,
  TimestampsUpdated,
  WhitelistedCollectorsUpdated
} from "../generated/CapyTrustStrategy/CapyTrustStrategy"

export function createAllocatedEvent(
  recipientId: Address,
  amount: BigInt,
  token: Address,
  sender: Address
): Allocated {
  let allocatedEvent = changetype<Allocated>(newMockEvent())

  allocatedEvent.parameters = new Array()

  allocatedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientId",
      ethereum.Value.fromAddress(recipientId)
    )
  )
  allocatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  allocatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  allocatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return allocatedEvent
}

export function createAllocationUpdatedEvent(
  recipientAddress: Address,
  newAllocation: BigInt
): AllocationUpdated {
  let allocationUpdatedEvent = changetype<AllocationUpdated>(newMockEvent())

  allocationUpdatedEvent.parameters = new Array()

  allocationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientAddress",
      ethereum.Value.fromAddress(recipientAddress)
    )
  )
  allocationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newAllocation",
      ethereum.Value.fromUnsignedBigInt(newAllocation)
    )
  )

  return allocationUpdatedEvent
}

export function createBatchAllocationCompletedEvent(
  allocationsCount: BigInt,
  totalAllocated: BigInt
): BatchAllocationCompleted {
  let batchAllocationCompletedEvent = changetype<BatchAllocationCompleted>(
    newMockEvent()
  )

  batchAllocationCompletedEvent.parameters = new Array()

  batchAllocationCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "allocationsCount",
      ethereum.Value.fromUnsignedBigInt(allocationsCount)
    )
  )
  batchAllocationCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "totalAllocated",
      ethereum.Value.fromUnsignedBigInt(totalAllocated)
    )
  )

  return batchAllocationCompletedEvent
}

export function createDistributedEvent(
  recipientId: Address,
  recipientAddress: Address,
  amount: BigInt,
  sender: Address
): Distributed {
  let distributedEvent = changetype<Distributed>(newMockEvent())

  distributedEvent.parameters = new Array()

  distributedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientId",
      ethereum.Value.fromAddress(recipientId)
    )
  )
  distributedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientAddress",
      ethereum.Value.fromAddress(recipientAddress)
    )
  )
  distributedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  distributedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return distributedEvent
}

export function createDistributionExecutedEvent(
  recipientIds: Array<Address>,
  allocations: Array<BigInt>,
  duration: BigInt
): DistributionExecuted {
  let distributionExecutedEvent = changetype<DistributionExecuted>(
    newMockEvent()
  )

  distributionExecutedEvent.parameters = new Array()

  distributionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientIds",
      ethereum.Value.fromAddressArray(recipientIds)
    )
  )
  distributionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "allocations",
      ethereum.Value.fromUnsignedBigIntArray(allocations)
    )
  )
  distributionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return distributionExecutedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createInitialized1Event(
  poolId: BigInt,
  data: Bytes
): Initialized1 {
  let initialized1Event = changetype<Initialized1>(newMockEvent())

  initialized1Event.parameters = new Array()

  initialized1Event.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromUnsignedBigInt(poolId))
  )
  initialized1Event.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return initialized1Event
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPoolActiveEvent(active: boolean): PoolActive {
  let poolActiveEvent = changetype<PoolActive>(newMockEvent())

  poolActiveEvent.parameters = new Array()

  poolActiveEvent.parameters.push(
    new ethereum.EventParam("active", ethereum.Value.fromBoolean(active))
  )

  return poolActiveEvent
}

export function createRecipientRegisteredEvent(
  recipientAddress: Address,
  name: string,
  avatar: string,
  bio: string
): RecipientRegistered {
  let recipientRegisteredEvent = changetype<RecipientRegistered>(newMockEvent())

  recipientRegisteredEvent.parameters = new Array()

  recipientRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "recipientAddress",
      ethereum.Value.fromAddress(recipientAddress)
    )
  )
  recipientRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  recipientRegisteredEvent.parameters.push(
    new ethereum.EventParam("avatar", ethereum.Value.fromString(avatar))
  )
  recipientRegisteredEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
  )

  return recipientRegisteredEvent
}

export function createRecipientStatusUpdatedEvent(
  recipientAddress: Address,
  status: i32
): RecipientStatusUpdated {
  let recipientStatusUpdatedEvent = changetype<RecipientStatusUpdated>(
    newMockEvent()
  )

  recipientStatusUpdatedEvent.parameters = new Array()

  recipientStatusUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "recipientAddress",
      ethereum.Value.fromAddress(recipientAddress)
    )
  )
  recipientStatusUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return recipientStatusUpdatedEvent
}

export function createRegisteredEvent(
  recipientId: Address,
  data: Bytes,
  sender: Address
): Registered {
  let registeredEvent = changetype<Registered>(newMockEvent())

  registeredEvent.parameters = new Array()

  registeredEvent.parameters.push(
    new ethereum.EventParam(
      "recipientId",
      ethereum.Value.fromAddress(recipientId)
    )
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return registeredEvent
}

export function createTimestampsUpdatedEvent(
  registrationStartTime: BigInt,
  registrationEndTime: BigInt,
  allocationStartTime: BigInt,
  allocationEndTime: BigInt
): TimestampsUpdated {
  let timestampsUpdatedEvent = changetype<TimestampsUpdated>(newMockEvent())

  timestampsUpdatedEvent.parameters = new Array()

  timestampsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "registrationStartTime",
      ethereum.Value.fromUnsignedBigInt(registrationStartTime)
    )
  )
  timestampsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "registrationEndTime",
      ethereum.Value.fromUnsignedBigInt(registrationEndTime)
    )
  )
  timestampsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "allocationStartTime",
      ethereum.Value.fromUnsignedBigInt(allocationStartTime)
    )
  )
  timestampsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "allocationEndTime",
      ethereum.Value.fromUnsignedBigInt(allocationEndTime)
    )
  )

  return timestampsUpdatedEvent
}

export function createWhitelistedCollectorsUpdatedEvent(
  newWhitelistedCollectors: Array<Address>
): WhitelistedCollectorsUpdated {
  let whitelistedCollectorsUpdatedEvent =
    changetype<WhitelistedCollectorsUpdated>(newMockEvent())

  whitelistedCollectorsUpdatedEvent.parameters = new Array()

  whitelistedCollectorsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newWhitelistedCollectors",
      ethereum.Value.fromAddressArray(newWhitelistedCollectors)
    )
  )

  return whitelistedCollectorsUpdatedEvent
}
