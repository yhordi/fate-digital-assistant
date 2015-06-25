module WaitForAjax
  def wait_for_ajax
    page.document.synchronize do
      raise AjaxStillWorking unless page.evaluate_script('jQuery.active == 0')
    end
  end
end
