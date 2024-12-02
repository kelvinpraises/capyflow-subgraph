import { DataSourceContext } from "@graphprotocol/graph-ts";

import { StrategyCreated as StrategyCreatedEvent } from "../generated/CapyTrustStrategyFactory/CapyTrustStrategyFactory";
import { StrategyCreated } from "../generated/schema";
import { CapyTrustStrategy } from "../generated/templates";

export function handleStrategyCreated(event: StrategyCreatedEvent): void {
  let entity = new StrategyCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  entity.owner = event.params.owner;
  entity.strategyAddress = event.params.strategyAddress;
  entity.name = event.params.name;
  entity.avatar = event.params.avatar;
  entity.description = event.params.description;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();

  let context = new DataSourceContext();
  context.setString("creator", event.params.owner.toHexString());
  context.setString("strategyName", event.params.name);
  CapyTrustStrategy.createWithContext(event.params.strategyAddress, context);
}
