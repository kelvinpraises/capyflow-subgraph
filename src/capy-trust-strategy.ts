import {
  AllocationUpdated as AllocationUpdatedEvent,
  BatchAllocationCompleted as BatchAllocationCompletedEvent,
  DistributionExecuted as DistributionExecutedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PoolActive as PoolActiveEvent,
  RecipientRegistered as RecipientRegisteredEvent,
  RecipientStatusUpdated as RecipientStatusUpdatedEvent,
  Registered as RegisteredEvent,
  TimestampsUpdated as TimestampsUpdatedEvent,
  WhitelistedCollectorsUpdated as WhitelistedCollectorsUpdatedEvent,
} from "../generated/templates/CapyTrustStrategy/CapyTrustStrategy";
import {
  AllocationUpdated,
  BatchAllocationCompleted,
  DistributionExecuted,
  OwnershipTransferred,
  PoolActive,
  RecipientRegistered,
  RecipientStatusUpdated,
  Registered,
  TimestampsUpdated,
  WhitelistedCollectorsUpdated,
} from "../generated/schema";

export function handleAllocationUpdated(event: AllocationUpdatedEvent): void {
  let entity = new AllocationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.recipientAddress = event.params.recipientAddress;
  entity.newAllocation = event.params.newAllocation;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleBatchAllocationCompleted(
  event: BatchAllocationCompletedEvent
): void {
  let entity = new BatchAllocationCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.allocationsCount = event.params.allocationsCount;
  entity.totalAllocated = event.params.totalAllocated;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDistributionExecuted(
  event: DistributionExecutedEvent
): void {
  let entity = new DistributionExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.recipientIds = event.params.recipientIds;
  entity.allocations = event.params.allocations;
  entity.duration = event.params.duration;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlePoolActive(event: PoolActiveEvent): void {
  let entity = new PoolActive(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.active = event.params.active;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRecipientRegistered(
  event: RecipientRegisteredEvent
): void {
  let entity = new RecipientRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.recipientAddress = event.params.recipientAddress;
  entity.name = event.params.name;
  entity.avatar = event.params.avatar;
  entity.bio = event.params.bio;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRecipientStatusUpdated(
  event: RecipientStatusUpdatedEvent
): void {
  let entity = new RecipientStatusUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.recipientAddress = event.params.recipientAddress;
  entity.status = event.params.status;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRegistered(event: RegisteredEvent): void {
  let entity = new Registered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.recipientId = event.params.recipientId;
  entity.data = event.params.data;
  entity.sender = event.params.sender;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTimestampsUpdated(event: TimestampsUpdatedEvent): void {
  let entity = new TimestampsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.registrationStartTime = event.params.registrationStartTime;
  entity.registrationEndTime = event.params.registrationEndTime;
  entity.allocationStartTime = event.params.allocationStartTime;
  entity.allocationEndTime = event.params.allocationEndTime;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWhitelistedCollectorsUpdated(
  event: WhitelistedCollectorsUpdatedEvent
): void {
  let entity = new WhitelistedCollectorsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.newWhitelistedCollectors = event.params.newWhitelistedCollectors;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
