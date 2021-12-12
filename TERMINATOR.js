Array.from(JsMacros.getOpenContexts()).forEach((ctx) => {
  if (context.getCtx() == ctx) return;
  ctx.closeContext()
});
context.getCtx().closeContext()
